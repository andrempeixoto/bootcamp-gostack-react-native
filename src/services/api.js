import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3330',
});

export default api;

/**
 * iOS with emulator: localhost
 * iOS with device: your machine's IP
 * Android with Emulator: localhost (adb reverse)
 * Android with Emulator: 10.0.2.2 (Android Studio)
 * Android with device: your machine's IP
 */
