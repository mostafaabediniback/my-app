import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export type ToastType = 'success' | 'error' | 'info';

interface ToastState {
  visible: boolean;
  type: ToastType;
  text1: string;
  text2?: string;
}

class ToastManager {
  private listeners: Array<(state: ToastState) => void> = [];
  private currentState: ToastState = {
    visible: false,
    type: 'info',
    text1: '',
  };

  subscribe(listener: (state: ToastState) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach((listener) => listener(this.currentState));
  }

  show(type: ToastType, text1: string, text2?: string) {
    this.currentState = {
      visible: true,
      type,
      text1,
      text2,
    };
    this.notify();

    // Auto hide after 3 seconds
    setTimeout(() => {
      this.hide();
    }, 3000);
  }

  hide() {
    this.currentState = {
      ...this.currentState,
      visible: false,
    };
    this.notify();
  }
}

export const toastManager = new ToastManager();

export default function Toast() {
  const [state, setState] = React.useState<ToastState>({
    visible: false,
    type: 'info',
    text1: '',
  });

  const slideAnim = useRef(new Animated.Value(-100)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const unsubscribe = toastManager.subscribe((newState) => {
      setState(newState);

      if (newState.visible) {
        // Show animation
        Animated.parallel([
          Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(opacityAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
        ]).start();
      } else {
        // Hide animation
        Animated.parallel([
          Animated.timing(slideAnim, {
            toValue: -100,
            duration: 250,
            useNativeDriver: true,
          }),
          Animated.timing(opacityAnim, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true,
          }),
        ]).start();
      }
    });

    return unsubscribe;
  }, []);

  if (!state.visible) {
    return null;
  }

  const getIconName = () => {
    switch (state.type) {
      case 'success':
        return 'checkmark-circle';
      case 'error':
        return 'close-circle';
      case 'info':
        return 'information-circle';
    }
  };

  const getIconColor = () => {
    switch (state.type) {
      case 'success':
        return '#34C759';
      case 'error':
        return '#FF3B30';
      case 'info':
        return '#007AFF';
    }
  };

  const getBorderColor = () => {
    switch (state.type) {
      case 'success':
        return '#34C759';
      case 'error':
        return '#FF3B30';
      case 'info':
        return '#007AFF';
    }
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY: slideAnim }],
          opacity: opacityAnim,
        },
      ]}
      pointerEvents="box-none"
    >
      <View
        style={[
          styles.toast,
          { borderRightColor: getBorderColor() },
        ]}
      >
        <View style={[styles.iconContainer, { backgroundColor: getIconColor() + '20' }]}>
          <Ionicons name={getIconName()} size={24} color={getIconColor()} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>{state.text1}</Text>
          {state.text2 && <Text style={styles.text2}>{state.text2}</Text>}
        </View>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => toastManager.hide()}
        >
          <Ionicons name="close" size={18} color="#8E8E93" />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 9999,
    paddingHorizontal: 16,
  },
  toast: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 14,
    width: width - 32,
    minHeight: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
    borderRightWidth: 4,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  textContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 8,
  },
  text1: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1C1C1E',
    textAlign: 'right',
  },
  text2: {
    fontSize: 13,
    color: '#8E8E93',
    marginTop: 2,
    textAlign: 'right',
  },
  closeButton: {
    padding: 4,
  },
});

// Export convenience functions
export const showToast = {
  success: (text1: string, text2?: string) => {
    toastManager.show('success', text1, text2);
  },
  error: (text1: string, text2?: string) => {
    toastManager.show('error', text1, text2);
  },
  info: (text1: string, text2?: string) => {
    toastManager.show('info', text1, text2);
  },
};
