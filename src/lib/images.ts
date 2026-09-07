import type { ImageMetadata } from "astro";

import heroContact from "@/assets/hero-contact.jpg";
import heroDelivery from "@/assets/hero-delivery.jpg";
import heroHowWeWork from "@/assets/hero-howework.jpg";
import heroImpact from "@/assets/hero-impact.jpg";
import heroInsights from "@/assets/hero-insights.jpg";
import heroPartners from "@/assets/hero-partners.jpg";
import heroProjects from "@/assets/hero-projects.jpg";
import heroWhatWeDo from "@/assets/hero-whatwedo.jpg";
import pillarCircular from "@/assets/pillar-circular.jpg";
import pillarMsme from "@/assets/pillar-msme.jpg";
import childrenCommunity from "@/assets/photos/pdf-children-community.jpg";
import circleDiscussion from "@/assets/photos/pdf-circle-discussion.jpg";
import groupCircle from "@/assets/photos/pdf-group-circle.jpg";
import produceBaskets from "@/assets/photos/pdf-produce-baskets.jpg";
import trainingWhiteboard from "@/assets/photos/pdf-training-whiteboard.jpg";
import uniformedTeam from "@/assets/photos/pdf-uniformed-team.jpg";
import trainingSession from "@/assets/photos/training-session.jpg";
import circularEconomy from "@/assets/circular-economy.jpg";
import heroLandscape from "@/assets/hero-landscape.jpg";
import msmeMarket from "@/assets/msme-market.jpg";
import communityChildren from "@/assets/photos/community-children.jpg";
import impactMap from "@/assets/photos/pdf-impact-map.jpg";
import workshopScreen from "@/assets/photos/pdf-workshop-screen.jpg";
import programMeeting from "@/assets/photos/program-meeting.jpg";

/**
 * Only photographs of the actual work are registered here. Clip art, slide
 * captures with text burned in, and blank textures are deliberately left out:
 * if a key exists, someone will eventually ship it.
 *
 * Content files reference photography by key, never by path, so that copy can
 * move to a CMS without carrying build-time import paths with it.
 */
export const IMAGES = {
  "hero-contact": heroContact,
  "hero-delivery": heroDelivery,
  "hero-how-we-work": heroHowWeWork,
  "hero-impact": heroImpact,
  "hero-insights": heroInsights,
  "hero-partners": heroPartners,
  "hero-projects": heroProjects,
  "hero-what-we-do": heroWhatWeDo,
  "pillar-circular": pillarCircular,
  "pillar-msme": pillarMsme,
  "children-community": childrenCommunity,
  "circle-discussion": circleDiscussion,
  "group-circle": groupCircle,
  "produce-baskets": produceBaskets,
  "training-whiteboard": trainingWhiteboard,
  "uniformed-team": uniformedTeam,
  "training-session": trainingSession,
  "circular-economy": circularEconomy,
  "hero-landscape": heroLandscape,
  "msme-market": msmeMarket,
  "community-children": communityChildren,
  "impact-map": impactMap,
  "workshop-screen": workshopScreen,
  "program-meeting": programMeeting,
} satisfies Record<string, ImageMetadata>;

export type ImageKey = keyof typeof IMAGES;

export function image(key: ImageKey): ImageMetadata {
  return IMAGES[key];
}
