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

/**
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
} satisfies Record<string, ImageMetadata>;

export type ImageKey = keyof typeof IMAGES;

export function image(key: ImageKey): ImageMetadata {
  return IMAGES[key];
}
