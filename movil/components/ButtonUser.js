import React from 'react';
import { StyleSheet, TouchableOpacity, Text, ActivityIndicator } from 'react-native';

const Button = ({
  texto,
  action,
  variant = 'primary',
  disabled = false,
  loading = false,
  style,
  textStyle,
}) => {
  const getButtonStyle = () => {
    const baseStyle = [styles.base];

    if (styles[variant]) {
      baseStyle.push(styles[variant]);
    } else {
      baseStyle.push(styles.primary);
    }

    if (disabled) {
      baseStyle.push(styles.disabled);
    }

    if (style) {
      baseStyle.push(style);
    }

    return baseStyle;
  };

  const getTextStyle = () => {
    const baseText = [styles.baseText];

    if (variant === 'secondary' || variant === 'cancel') {
      baseText.push(styles.secondaryText);
    }

    if (disabled) {
      baseText.push(styles.disabledText);
    }

    if (textStyle) {
      baseText.push(textStyle);
    }

    return baseText;
  };

  return (
    <TouchableOpacity
      onPress={disabled || loading ? null : action}
      style={getButtonStyle()}
      activeOpacity={disabled || loading ? 1 : 0.7}
      accessibilityRole="button"
      accessibilityState={{ disabled, busy: loading }}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'secondary' || variant === 'cancel' ? "#3E92CC" : "#FFFFFF"}
        />
      ) : (
        <Text style={getTextStyle()}>{texto}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },

  // Variants
  primary: {
    backgroundColor: "#3E92CC", // azul claro elegante
  },
  secondary: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#3E92CC",
  },
  danger: {
    backgroundColor: "#D9534F",
  },
  edit: {
    backgroundColor: "#0275D8",
  },
  cancel: {
    backgroundColor: "#EEEEEE",
  },
  disabled: {
    backgroundColor: "#B0B8C1",
    borderColor: "#B0B8C1",
  },

  // Text
  baseText: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color: "#FFFFFF",
  },
  secondaryText: {
    color: "#3E92CC",
  },
  disabledText: {
    color: "#F0F0F0",
  },
});

export default Button;
