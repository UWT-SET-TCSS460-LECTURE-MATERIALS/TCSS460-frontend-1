import { SxProps, Theme, useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

export type LogoVariant = 'full' | 'small' | 'icon' | 'monochrome';

interface LogoProps {
  /**
   * The variant of the logo to display
   * - full: Complete logo with full details
   * - small: Smaller version
   * - icon: Just the icon part
   * - monochrome: Single color version
   */
  variant?: LogoVariant;
  /**
   * Width of the logo (height will scale proportionally)
   */
  width?: number | string;
  /**
   * Height of the logo (width will scale proportionally)
   */
  height?: number | string;
  /**
   * Additional styles to apply to the container
   */
  sx?: SxProps<Theme>;
}

/**
 * App logo component with state management visualization
 * Features purple (#9c27b0) and blue (#1976d2) color scheme
 *
 * Design concept:
 * - Central Node: Represents the core state container in React applications
 * - Connected Nodes: Symbolize components consuming and updating state
 * - Dashed Lines: Represent data flow and state updates between components
 * - Radiating Pattern: Illustrates how state changes propagate through the application
 */
export default function Logo({ variant = 'full', width, height, sx }: LogoProps) {
  const theme = useTheme();
  const purple = theme.palette.secondary.main;
  const blue = theme.palette.primary.main;

  // Render different variants based on the variant prop
  const renderFullLogo = () => (
    <>
      {/* Background circle for depth */}
      <circle
        cx="100"
        cy="100"
        r="95"
        fill="white"
        opacity="0.9"
      />

      {/* Outer circle - represents application boundary */}
      <circle
        cx="100"
        cy="100"
        r="85"
        fill="none"
        stroke={blue}
        strokeWidth="2"
        opacity="0.3"
      />

      {/* Central state node - the main state container */}
      <circle
        cx="100"
        cy="100"
        r="20"
        fill={purple}
      />
      <circle
        cx="100"
        cy="100"
        r="20"
        fill={purple}
        opacity="0.3"
      />

      {/* State connection nodes - representing distributed state */}
      {/* Top node */}
      <circle
        cx="100"
        cy="40"
        r="12"
        fill={blue}
        opacity="0.9"
      />
      <line
        x1="100"
        y1="80"
        x2="100"
        y2="52"
        stroke={purple}
        strokeWidth="2"
        opacity="0.6"
        strokeDasharray="4 2"
      />

      {/* Right node */}
      <circle
        cx="160"
        cy="100"
        r="12"
        fill={blue}
        opacity="0.9"
      />
      <line
        x1="120"
        y1="100"
        x2="148"
        y2="100"
        stroke={purple}
        strokeWidth="2"
        opacity="0.6"
        strokeDasharray="4 2"
      />

      {/* Bottom node */}
      <circle
        cx="100"
        cy="160"
        r="12"
        fill={blue}
        opacity="0.9"
      />
      <line
        x1="100"
        y1="120"
        x2="100"
        y2="148"
        stroke={purple}
        strokeWidth="2"
        opacity="0.6"
        strokeDasharray="4 2"
      />

      {/* Left node */}
      <circle
        cx="40"
        cy="100"
        r="12"
        fill={blue}
        opacity="0.9"
      />
      <line
        x1="80"
        y1="100"
        x2="52"
        y2="100"
        stroke={purple}
        strokeWidth="2"
        opacity="0.6"
        strokeDasharray="4 2"
      />

      {/* Diagonal nodes - representing state flow */}
      {/* Top-right */}
      <circle
        cx="142"
        cy="58"
        r="8"
        fill={purple}
        opacity="0.7"
      />
      <line
        x1="115"
        y1="85"
        x2="136"
        y2="64"
        stroke={blue}
        strokeWidth="1.5"
        opacity="0.4"
      />

      {/* Bottom-right */}
      <circle
        cx="142"
        cy="142"
        r="8"
        fill={purple}
        opacity="0.7"
      />
      <line
        x1="115"
        y1="115"
        x2="136"
        y2="136"
        stroke={blue}
        strokeWidth="1.5"
        opacity="0.4"
      />

      {/* Bottom-left */}
      <circle
        cx="58"
        cy="142"
        r="8"
        fill={purple}
        opacity="0.7"
      />
      <line
        x1="85"
        y1="115"
        x2="64"
        y2="136"
        stroke={blue}
        strokeWidth="1.5"
        opacity="0.4"
      />

      {/* Top-left */}
      <circle
        cx="58"
        cy="58"
        r="8"
        fill={purple}
        opacity="0.7"
      />
      <line
        x1="85"
        y1="85"
        x2="64"
        y2="64"
        stroke={blue}
        strokeWidth="1.5"
        opacity="0.4"
      />

      {/* Center highlight - represents active state */}
      <circle
        cx="100"
        cy="100"
        r="6"
        fill="white"
        opacity="0.8"
      />
    </>
  );

  const renderSmallLogo = () => (
    <>
      <circle
        cx="100"
        cy="100"
        r="20"
        fill={purple}
      />
      <circle
        cx="100"
        cy="40"
        r="12"
        fill={blue}
        opacity="0.9"
      />
      <circle
        cx="160"
        cy="100"
        r="12"
        fill={blue}
        opacity="0.9"
      />
      <circle
        cx="100"
        cy="160"
        r="12"
        fill={blue}
        opacity="0.9"
      />
      <circle
        cx="40"
        cy="100"
        r="12"
        fill={blue}
        opacity="0.9"
      />
      <line
        x1="100"
        y1="80"
        x2="100"
        y2="52"
        stroke={purple}
        strokeWidth="2"
        opacity="0.6"
      />
      <line
        x1="120"
        y1="100"
        x2="148"
        y2="100"
        stroke={purple}
        strokeWidth="2"
        opacity="0.6"
      />
      <line
        x1="100"
        y1="120"
        x2="100"
        y2="148"
        stroke={purple}
        strokeWidth="2"
        opacity="0.6"
      />
      <line
        x1="80"
        y1="100"
        x2="52"
        y2="100"
        stroke={purple}
        strokeWidth="2"
        opacity="0.6"
      />
    </>
  );

  const renderIconLogo = () => (
    <>
      <circle
        cx="100"
        cy="100"
        r="30"
        fill={purple}
      />
      <circle
        cx="100"
        cy="50"
        r="15"
        fill={blue}
      />
      <circle
        cx="150"
        cy="100"
        r="15"
        fill={blue}
      />
      <circle
        cx="100"
        cy="150"
        r="15"
        fill={blue}
      />
      <circle
        cx="50"
        cy="100"
        r="15"
        fill={blue}
      />
      <circle
        cx="100"
        cy="100"
        r="10"
        fill="white"
        opacity="0.8"
      />
    </>
  );

  const renderMonochromeLogo = () => (
    <>
      <circle
        cx="100"
        cy="100"
        r="20"
        fill="#333"
      />
      <circle
        cx="100"
        cy="40"
        r="12"
        fill="#666"
      />
      <circle
        cx="160"
        cy="100"
        r="12"
        fill="#666"
      />
      <circle
        cx="100"
        cy="160"
        r="12"
        fill="#666"
      />
      <circle
        cx="40"
        cy="100"
        r="12"
        fill="#666"
      />
      <line
        x1="100"
        y1="80"
        x2="100"
        y2="52"
        stroke="#999"
        strokeWidth="2"
      />
      <line
        x1="120"
        y1="100"
        x2="148"
        y2="100"
        stroke="#999"
        strokeWidth="2"
      />
      <line
        x1="100"
        y1="120"
        x2="100"
        y2="148"
        stroke="#999"
        strokeWidth="2"
      />
      <line
        x1="80"
        y1="100"
        x2="52"
        y2="100"
        stroke="#999"
        strokeWidth="2"
      />
    </>
  );

  const getLogoContent = () => {
    switch (variant) {
      case 'small':
        return renderSmallLogo();
      case 'icon':
        return renderIconLogo();
      case 'monochrome':
        return renderMonochromeLogo();
      case 'full':
      default:
        return renderFullLogo();
    }
  };

  return (
    <Box
      component="svg"
      sx={{
        width: width || 'auto',
        height: height || 'auto',
        ...sx,
      }}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {getLogoContent()}
    </Box>
  );
}
