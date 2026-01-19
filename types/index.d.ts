// Type definitions for PhoneGap / Cordova Social Sharing plugin
// Project: https://github.com/AhmedRaisi/SocialSharing-PhoneGap-Plugin
// Licensed under the MIT license.

interface Window {
	plugins: Plugins
}

interface Plugins {
	socialsharing: SocialSharingManager
}

interface Navigator {
	share: SocialSharingW3C
}

export interface SocialSharingOptions {
	message?: string
	subject?: string
	files?: ArrayLike<string>
	url?: string
	chooserTitle?: string
	appPackageName?: string
}

export interface SocialSharingResult {
	completed: boolean
	app?: string
}

export interface SocialSharingW3CData {
	title?: string
	text?: string
	url?: string
}

export type SocialSharingW3C = (shareData: SocialSharingW3CData) => Promise<SocialSharingResult>
export type SocialSharingSuccessCallback<T> = (result: T) => void
export type SocialSharingErrorCallback = (msg?: string) => void

/**
 * Social Sharing Plugin Manager
 * Direct access to the Cordova Social Sharing plugin
 */
export default class SocialSharingManager {
	iPadPopupCoordinates: () => string
	setIPadPopupCoordinates: (coords: string) => void

	/**
	 * Check if sharing is available
	 */
	available(callback: (available: boolean) => void): void

	/**
	 * Share with options (recommended)
	 */
	shareWithOptions(options: SocialSharingOptions, successCallback?: SocialSharingSuccessCallback<SocialSharingResult>, errorCallback?: SocialSharingErrorCallback): void

	/**
	 * W3C-compliant share method
	 */
	shareW3C: SocialSharingW3C

	/**
	 * Generic share
	 */
	share(message?: string, subject?: string, fileOrFileArray?: string | ArrayLike<string>, url?: string, successCallback?: SocialSharingSuccessCallback<boolean>, errorCallback?: SocialSharingErrorCallback): void

	/**
	 * Share via Twitter
	 */
	shareViaTwitter(message?: string, file?: string, url?: string, successCallback?: SocialSharingSuccessCallback<boolean>, errorCallback?: SocialSharingErrorCallback): void

	/**
	 * Share via Facebook
	 */
	shareViaFacebook(message?: string, fileOrFileArray?: string | ArrayLike<string>, url?: string, successCallback?: SocialSharingSuccessCallback<boolean>, errorCallback?: SocialSharingErrorCallback): void

	/**
	 * Share via Facebook with paste message hint
	 */
	shareViaFacebookWithPasteMessageHint(message?: string, fileOrFileArray?: string | ArrayLike<string>, url?: string, pasteMessageHint?: string, successCallback?: SocialSharingSuccessCallback<boolean>, errorCallback?: SocialSharingErrorCallback): void

	/**
	 * Share via WhatsApp
	 */
	shareViaWhatsApp(message?: string, fileOrFileArray?: string | ArrayLike<string>, url?: string, successCallback?: SocialSharingSuccessCallback<never>, errorCallback?: SocialSharingErrorCallback): void

	/**
	 * Share via WhatsApp to specific receiver
	 */
	shareViaWhatsAppToReceiver(receiver?: string, message?: string, fileOrFileArray?: string | ArrayLike<string>, url?: string, successCallback?: SocialSharingSuccessCallback<never>, errorCallback?: SocialSharingErrorCallback): void

	/**
	 * Share via WhatsApp to specific phone number
	 */
	shareViaWhatsAppToPhone(phone?: string, message?: string, fileOrFileArray?: string | ArrayLike<string>, url?: string, successCallback?: SocialSharingSuccessCallback<never>, errorCallback?: SocialSharingErrorCallback): void

	/**
	 * Share via SMS
	 */
	shareViaSMS(options?: SocialSharingOptions | string, phoneNumbers?: ArrayLike<string>, successCallback?: SocialSharingSuccessCallback<boolean>, errorCallback?: SocialSharingErrorCallback): void

	/**
	 * Share via Email
	 */
	shareViaEmail(message?: string, subject?: string, toArray?: ArrayLike<string>, ccArray?: ArrayLike<string>, bccArray?: ArrayLike<string>, fileOrFileArray?: string | ArrayLike<string>, successCallback?: SocialSharingSuccessCallback<boolean>, errorCallback?: SocialSharingErrorCallback): void

	/**
	 * Check if can share via specific app
	 */
	canShareVia(via: string, message?: string, subject?: string, fileOrFileArray?: string | ArrayLike<string>, successCallback?: SocialSharingSuccessCallback<never>, errorCallback?: SocialSharingErrorCallback): void

	/**
	 * Check if can share via email (native Mail app)
	 */
	canShareViaEmail(successCallback?: SocialSharingSuccessCallback<never>, errorCallback?: SocialSharingErrorCallback): void

	/**
	 * Check if email clients are available (works with third-party apps like Gmail, Outlook)
	 */
	hasEmailClients(successCallback?: SocialSharingSuccessCallback<boolean>, errorCallback?: SocialSharingErrorCallback): void

	/**
	 * Share via Instagram
	 */
	shareViaInstagram(message?: string, fileOrFileArray?: string | ArrayLike<string>, successCallback?: SocialSharingSuccessCallback<never>, errorCallback?: SocialSharingErrorCallback): void

	/**
	 * Share via specific app
	 */
	shareVia(via: string, message?: string, subject?: string, fileOrFileArray?: string | ArrayLike<string>, url?: string, successCallback?: SocialSharingSuccessCallback<boolean>, errorCallback?: SocialSharingErrorCallback): void

	/**
	 * Save to photo album
	 */
	saveToPhotoAlbum(fileOrFileArray?: string | ArrayLike<string>, successCallback?: SocialSharingSuccessCallback<never>, errorCallback?: SocialSharingErrorCallback): void
}

// Legacy type alias for backward compatibility
declare class SocialSharing extends SocialSharingManager {}
