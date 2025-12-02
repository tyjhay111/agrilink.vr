function Icon({ iconName }) {
  try {
    // This component is deprecated in favor of inline SVGs for better reliability.
    return null;
  } catch (error) {
    console.error('Icon component error:', error);
    return null;
  }
}