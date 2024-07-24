<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_ucss_blog' );

/** Database username */
define( 'DB_USER', 'blogusr' );

/** Database password */
define( 'DB_PASSWORD', '2A54df25gOaq' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '6P({2gVrHlC^Si{?v3}O/2Weg3~@5)8ZcK}wlz;q3;7^)I ukj/{^OO9SI39sC v' );
define( 'SECURE_AUTH_KEY',  'suTlVF)I=dYjS5sa7u@k3^4b766x0K_7v~hXWV ]8{6zh{3ToD>1OJ4:b`1mG%%/' );
define( 'LOGGED_IN_KEY',    '):HI!!G=0*pio{cc(RKoAd`{f`Z09kh_8HSRr(,%HRqs}_y;iylU6Bfl2*^YSwS(' );
define( 'NONCE_KEY',        ';4Na3X8c^<T4rR8EV|hjudO|NG+:U:p3I~Jn&>HkDWrR%he#frgL6}..sxFw.N{}' );
define( 'AUTH_SALT',        'GqVEugf1BggCo0AQM*nW.%s7j?,&qeX/SM}Ls{8+Om:M2,2l?%L`N5Qhd,(k]weD' );
define( 'SECURE_AUTH_SALT', '7UaX mqIuxU_;NJ+ORc59j*h8t6gN0YgsRM! h4{U;8<;Fbc3+fOAvI*OTJ6r0wZ' );
define( 'LOGGED_IN_SALT',   ':DAUpS^-)h]6`KTsvQWzII:mf]rxJ*g;^^Z~|pf@v2|Vk/(r_.f7BEi8:zWr,nZM' );
define( 'NONCE_SALT',       '+OmagKuGLFh@/cIW|rAo*D/r{4X!m^>SxfN<<iQ&,wC,TZBKSz0E2,zAPl,_w6SL' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
