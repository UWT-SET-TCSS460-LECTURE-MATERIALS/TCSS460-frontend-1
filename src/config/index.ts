/**
 * Application configuration
 * Centralized settings for the TCSS 460 demo application
 */

export const APP_CONFIG = {
  /**
   * Course information
   */
  course: {
    code: 'TCSS 460',
    name: 'Client Server Programming for the Web',
    semester: 'Spring 2026',
    university: 'UW Tacoma',
    school: 'School of Engineering and Technology',
  },

  /**
   * Application metadata
   */
  app: {
    title: 'TCSS 460 Demo 1',
    description: 'React fundamentals — state, components, and client-side routing',
  },

  /**
   * Navigation routes
   */
  routes: {
    home: '/',
    state: '/state',
    messagesView: '/messages/view',
    messagesSend: '/messages/send',
  },
} as const;

/**
 * Type-safe access to config values
 */
export type AppConfig = typeof APP_CONFIG;
