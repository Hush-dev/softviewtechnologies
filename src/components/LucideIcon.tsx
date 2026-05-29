/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Cpu, 
  Layers, 
  Zap, 
  Activity, 
  Code, 
  ShieldCheck, 
  Flame, 
  Grid, 
  Radio, 
  HeartPulse, 
  Wine, 
  Droplet, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowUpRight, 
  Check, 
  ChevronRight, 
  Info, 
  Calendar, 
  Award, 
  Send, 
  Menu, 
  X, 
  Briefcase, 
  BookOpen, 
  Sparkles, 
  TrendingUp, 
  CheckCircle2, 
  Image as ImageIcon,
  Building,
  GraduationCap
} from 'lucide-react';

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className = '', size = 24 }: LucideIconProps) {
  const iconMap: { [key: string]: any } = {
    Cpu,
    Layers,
    Zap,
    Activity,
    Code,
    ShieldCheck,
    Flame,
    Grid,
    Radio,
    HeartPulse,
    Wine,
    Droplet,
    Phone,
    Mail,
    MapPin,
    Clock,
    ArrowUpRight,
    Check,
    ChevronRight,
    Info,
    Calendar,
    Award,
    Send,
    Menu,
    X,
    Briefcase,
    BookOpen,
    Sparkles,
    TrendingUp,
    CheckCircle2,
    ImageIcon,
    Building,
    GraduationCap
  };

  const IconComponent = iconMap[name] || Cpu; // Fallback to Cpu
  return <IconComponent className={className} size={size} id={`icon-${name}`} />;
}
