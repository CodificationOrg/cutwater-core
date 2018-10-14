import { Appender } from './Appender';
import { Level } from './Level';

/**
 * A [[Logger]] is used to log messages for a specific system or application component.
 */
export interface Logger {
  /**
   * The human readable name of this logger instance.
   */
  name: string;

  /**
   * The level at which this logger will output messages.
   */
  level: Level;

  /**
   * The destination for messages this logger receives.
   */
  appender: Appender;

  /**
   * Returns if this logger will output messages at the specified level.
   *
   * @param level - The level to check.
   */
  isEnabled(level: Level): boolean;

  /**
   * Creates a [[LoggingEvent]] of fatal priority, returning `true` if the message will be output based on this logger's level.
   *
   * @param input - Data describing the logging event.
   */
  fatal(...input: any[]): boolean;

  /**
   * Creates a [[LoggingEvent]] of error priority, returning `true` if the message will be output based on this logger's level.
   *
   * @param input - Data describing the logging event.
   */
  error(...input: any[]): boolean;

  /**
   * Creates a [[LoggingEvent]] of warn priority, returning `true` if the message will be output based on this logger's level.
   *
   * @param input - Data describing the logging event.
   */
  warn(...input: any[]): boolean;

  /**
   * Creates a [[LoggingEvent]] of info priority, returning `true` if the message will be output based on this logger's level.
   *
   * @param input - Data describing the logging event.
   */
  info(...input: any[]): boolean;

  /**
   * Creates a [[LoggingEvent]] of debug priority, returning `true` if the message will be output based on this logger's level.
   *
   * @param input - Data describing the logging event.
   */
  debug(...input: any[]): boolean;

  /**
   * Creates a [[LoggingEvent]] of trace priority, returning `true` if the message will be output based on this logger's level.
   *
   * @param input - Data describing the logging event.
   */
  trace(...input: any[]): boolean;

  /**
   * Supplied for compatibility with other logging systems.  Specific level varies by implementation.
   *
   * @param input - Data describing the logging event.
   */
  log(...input: any[]): boolean;
}
