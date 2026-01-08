import { StaticImageData } from "next/image";
import ConferenceImg from "../public/assets/conference/venue.png";
import HackathonImg from "../public/assets/hackathon/venue.png";

export interface VenueData {
  image: StaticImageData;
  name: string;
  address: string;
  directionLink: string;
}

export const conferenceVenue: VenueData = {
  image: ConferenceImg,
  name: "Jio World Convention Centre",
  address: "Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051, India",
  directionLink: "https://www.google.com/maps/place/Mumbai+Exhibition+Center",
};

export const hackathonVenue: VenueData = {
  image: HackathonImg,
   name: "Jio World Convention Centre",
  address: "Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051, India",
  directionLink: "https://www.google.com/maps/place/Mumbai+Exhibition+Center",
};
