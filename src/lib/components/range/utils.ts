export function adjustSlider(
    value: number,
    min: number,
    max: number,
    disabled?: boolean
  ) {
    // Calculate visible width
    const val = ((value - min) * 100) / (max - min);

    const fillLeft = 'var(--brand)';
    const fillLeftDisabled = 'var(--form-input-border)';
    const fillRight = 'var(--form-input-border)';

    return `linear-gradient(to right, ${
      disabled ? fillLeftDisabled : fillLeft
    } ${val}%, ${fillRight} ${val}%)`;
  }