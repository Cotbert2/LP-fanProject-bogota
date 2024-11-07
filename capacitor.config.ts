import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'LP-FanProject',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000, // Duración del splash screen en milisegundos
      launchAutoHide: true,     // Oculta automáticamente el splash screen
      backgroundColor: '#ffffff', // Color de fondo
      androidSplashResourceName: 'splash', // Nombre de la imagen en Android
      iosSplashResourceName: 'Default', // Nombre de la imagen en iOS
      showSpinner: true,         // Muestra un spinner
      spinnerColor: '#999999'    // Color del spinner
    },
  }
};

export default config;
