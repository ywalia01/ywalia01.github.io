import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSpotify } from "react-icons/fa";
// import yashImage from "../utils/yash.png";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";

// Function to get access token using the refresh token
const getAccessToken = async () => {
  const credentials = `${import.meta.env.VITE_SPOTIFY_CLIENT_ID}:${
    import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
  }`;
  const basicAuth = btoa(credentials); // Use btoa for Base64 encoding in the browser

  try {
    const response = await axios.post(
      TOKEN_ENDPOINT,
      new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN,
      }).toString(),
      {
        headers: {
          Authorization: `Basic ${basicAuth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching access token", error);
    return null;
  }
};

const Header = () => {
  const [track, setTrack] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrentlyPlayingTrack = async () => {
      const token = await getAccessToken();
      if (!token) {
        setError("Unable to fetch access token");
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.get(NOW_PLAYING_ENDPOINT, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200 && response.data.item) {
          setTrack(response.data.item);
        } else {
          setTrack(null);
        }
      } catch (error) {
        console.error("Error fetching currently playing track", error);
        setError("Unable to fetch currently playing track");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrentlyPlayingTrack();
  }, []);

  const handleTrackClick = () => {
    if (track) {
      window.open(track.external_urls.spotify, "_blank");
    }
  };

  return (
    <header className="flex flex-row justify-between align-items-center min-w-full max-h-8 mt-8">
      <div className="flex flex-row justify-between align-items-center space-x-4">
        {/* <img src={yashImage} alt="Yash" className="h-8" /> */}
        <a href="/" className="text-black hover:underline">
          home
        </a>
        <a href="/work" className="text-black hover:underline">
          work
        </a>
        <a
          href="https://yashwalia.hashnode.dev/"
          className="text-black hover:underline"
        >
          writing
        </a>
      </div>
      <div className="flex flex-col md:flex-row justify-between align-items-center items-center">
        <div
          className="flex items-center border border-black text-black px-2 py-0 rounded-full cursor-pointer"
          onClick={handleTrackClick}
        >
          <div className="max-w-48 overflow-hidden text-ellipsis">
            <span className="text-sm truncate">
              {isLoading
                ? "Loading..."
                : error
                ? error
                : track
                ? `${track.artists[0].name} - ${track.name}`
                : "not playing"}
            </span>
          </div>
          <FaSpotify className="text-sm ml-1" />
        </div>
      </div>
    </header>
  );
};

export default Header;
