import React from "react";
import * as LucideIcons from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className = "", size = 20 }) => {
  // Map custom skill/tool names or icon strings to actual Lucide component names
  const getIconComponent = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "html5":
      case "html":
        return LucideIcons.FileCode || LucideIcons.Code;
      case "css3":
      case "css":
        return LucideIcons.FileCode;
      case "js":
      case "javascript":
        return LucideIcons.FileJson || LucideIcons.Code2;
      case "typescript":
        return LucideIcons.FileCode2;
      case "php":
        return LucideIcons.Binary;
      case "laravel":
        return LucideIcons.Boxes;
      case "react":
      case "nextjs":
      case "next.js":
        return LucideIcons.Atom;
      case "flutter":
        return LucideIcons.Smartphone;
      case "firebase":
        return LucideIcons.Flame;
      case "database":
      case "mysql":
      case "postgresql":
      case "sqlite":
        return LucideIcons.Database;
      case "github":
        return Github;
      case "linkedin":
        return Linkedin;
      case "gitbranch":
      case "git":
        return LucideIcons.GitBranch;
      case "rest api":
      case "api":
        return LucideIcons.Webhook;
      case "cpu":
      case "hardware":
        return LucideIcons.Cpu;
      case "monitor":
      case "operating systems":
      case "os":
        return LucideIcons.Monitor;
      case "network":
      case "networking":
        return LucideIcons.Network;
      case "filecode":
      case "software":
        return LucideIcons.FolderCode;
      case "server":
      case "system administration":
      case "sysadmin":
        return LucideIcons.Server;
      case "shieldalert":
      case "security":
        return LucideIcons.ShieldCheck;
      case "headphones":
      case "helpdesk":
        return LucideIcons.Headphones;
      case "cloud":
        return LucideIcons.Cloud;
      case "search":
      case "strong problem solving":
        return LucideIcons.Search;
      case "zap":
      case "fast learner":
        return LucideIcons.Zap;
      case "users":
      case "team collaboration":
        return LucideIcons.Users;
      case "messagesquare":
      case "good communication":
        return LucideIcons.MessageSquare;
      case "heart":
      case "customer-oriented":
        return LucideIcons.Heart;
      case "checkcircle":
      case "detail-oriented":
        return LucideIcons.CheckCircle;
      case "shield":
      case "able to work under pressure":
        return LucideIcons.Shield;
      case "settings":
      case "quick troubleshooting":
        return LucideIcons.Sliders;
      case "refreshcw":
      case "adaptable":
        return LucideIcons.RefreshCw;
      case "graduationcap":
      case "continuous learning":
        return LucideIcons.GraduationCap;
      case "globe":
      case "web development":
        return LucideIcons.Globe;
      case "smartphone":
      case "mobile application development":
        return LucideIcons.Smartphone;
      case "wrench":
      case "website maintenance":
        return LucideIcons.Wrench;
      case "download":
      case "software installation & config":
        return LucideIcons.Download;
      case "layers":
      case "hardware upgrade":
        return LucideIcons.Layers;
      default:
        // Try direct lookup in LucideIcons
        const DynamicIcon = (LucideIcons as any)[iconName];
        if (DynamicIcon) return DynamicIcon;
        // Fallback icon
        return LucideIcons.HelpCircle;
    }
  };

  const IconComponent = getIconComponent(name);
  return <IconComponent className={className} size={size} />;
};
