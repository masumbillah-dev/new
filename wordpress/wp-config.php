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
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

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
define( 'AUTH_KEY',         '=15yWp{sir%e8-IpB*0#d?11qbBXAC9C@)=HCKPCtm>C$&0%M0S;aJCSRra|M$qo' );
define( 'SECURE_AUTH_KEY',  '3-G}~u>vP7r^G~}O)&2FKK[8z%!/fs}P45b|`TfTv;9tr8,egNtnnJ)<FiZu`GPK' );
define( 'LOGGED_IN_KEY',    'M4#&lRuF xhnYZd~e`&.bb{~e>,^T#fr]0+nXKMHsi#kI<Zl1n?!~Es4a5=UNr=4' );
define( 'NONCE_KEY',        'HnuizN;KB#&Pl,x~t2P6{oOr1:o4LWJob87;LMXU~e#qRwig5#4Nj#sZXj8cy}hk' );
define( 'AUTH_SALT',        'mQJzn8PdZ:&7<c}~M:-%|P$4HRPYb&NKb6X|}N.F6*aQ[@ice,Q:^F(%?8k?tU(m' );
define( 'SECURE_AUTH_SALT', 'B1 u[zkzo>vv:BxQR!1`*6w dZ*T )3XGV=+h`-}zs]HKOK0GzQ2?|yiURKO>QOf' );
define( 'LOGGED_IN_SALT',   'T{+R + :eq8txIH]FWBV) 7eO`[ V![Y3YNOIFw?Hwm4`sSJ;B0Fno;~G~_Sv[K`' );
define( 'NONCE_SALT',       ')V(O;H_uye65y5q0VZ<}^8kRy;]|}EsmT~mi@nciuR@M5k?H;$&m){fr:lBh,dS!' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
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
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
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
