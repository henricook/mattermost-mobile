// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import keyMirror from '@redux/utils/key_mirror';
import DeviceInfo from 'react-native-device-info';

// The iPhone 11 and iPhone 11 Pro Max have a navbar height of 44 and iPhone 11 Pro has 32
const IPHONE_11_LANDSCAPE_HEIGHT = ['iPhone 11', 'iPhone 11 Pro Max'];

export const UpgradeTypes = {
    CAN_UPGRADE: 'can_upgrade',
    MUST_UPGRADE: 'must_upgrade',
    NO_UPGRADE: 'no_upgrade',
    IS_BETA: 'is_beta',
};

export const SidebarSectionTypes = {
    UNREADS: 'unreads',
    FAVORITE: 'favorite',
    PUBLIC: 'public',
    PRIVATE: 'private',
    DIRECT: 'direct',
    RECENT_ACTIVITY: 'recent',
    ALPHA: 'alpha',
};

export const NotificationLevels = {
    DEFAULT: 'default',
    ALL: 'all',
    MENTION: 'mention',
    NONE: 'none',
};

export const NOTIFY_ALL_MEMBERS = 5;

const ViewTypes = keyMirror({
    DATA_CLEANUP: null,
    SERVER_URL_CHANGED: null,

    POST_DRAFT_CHANGED: null,
    COMMENT_DRAFT_CHANGED: null,
    SEARCH_DRAFT_CHANGED: null,

    POST_DRAFT_SELECTION_CHANGED: null,
    COMMENT_DRAFT_SELECTION_CHANGED: null,

    NOTIFICATION_IN_APP: null,

    SET_POST_DRAFT: null,
    SET_COMMENT_DRAFT: null,

    SET_TEMP_UPLOAD_FILES_FOR_POST_DRAFT: null,
    RETRY_UPLOAD_FILE_FOR_POST: null,

    CLEAR_FILES_FOR_POST_DRAFT: null,
    CLEAR_FAILED_FILES_FOR_POST_DRAFT: null,

    REMOVE_FILE_FROM_POST_DRAFT: null,
    REMOVE_LAST_FILE_FROM_POST_DRAFT: null,

    SET_CHANNEL_LOADER: null,
    SET_CHANNEL_REFRESHING: null,
    SET_CHANNEL_RETRY_FAILED: null,
    SET_CHANNEL_DISPLAY_NAME: null,

    REMOVE_LAST_CHANNEL_FOR_TEAM: null,

    GITLAB: null,
    OFFICE365: null,
    SAML: null,

    SET_INITIAL_POST_VISIBILITY: null,
    RECEIVED_FOCUSED_POST: null,
    LOADING_POSTS: null,
    SET_LOAD_MORE_POSTS_VISIBLE: null,

    RECEIVED_POSTS_FOR_CHANNEL_AT_TIME: null,

    SET_LAST_UPGRADE_CHECK: null,

    ADD_RECENT_EMOJI: null,
    EXTENSION_SELECTED_TEAM_ID: null,
    ANNOUNCEMENT_BANNER: null,

    INCREMENT_EMOJI_PICKER_PAGE: null,

    SET_DEEP_LINK_URL: null,

    SET_PROFILE_IMAGE_URI: null,

    SELECTED_ACTION_MENU: null,
    SUBMIT_ATTACHMENT_MENU_ACTION: null,

    PORTRAIT: null,
    LANDSCAPE: null,
});

export default {
    ...ViewTypes,
    POST_VISIBILITY_CHUNK_SIZE: 15,
    FEATURE_TOGGLE_PREFIX: 'feature_enabled_',
    EMBED_PREVIEW: 'embed_preview',
    LINK_PREVIEW_DISPLAY: 'link_previews',
    MIN_CHANNELNAME_LENGTH: 2,
    MAX_CHANNELNAME_LENGTH: 64,
    ANDROID_TOP_LANDSCAPE: 46,
    ANDROID_TOP_PORTRAIT: 56,
    IOS_TOP_LANDSCAPE: IPHONE_11_LANDSCAPE_HEIGHT.includes(DeviceInfo.getModel()) ? 44 : 32,
    IOS_TOP_PORTRAIT: 64,
    IOS_INSETS_TOP_PORTRAIT: 88,
    STATUS_BAR_HEIGHT: 20,
    PROFILE_PICTURE_SIZE: 32,
    PROFILE_PICTURE_EMOJI_SIZE: 28,
    DATA_SOURCE_USERS: 'users',
    DATA_SOURCE_CHANNELS: 'channels',
    NotificationLevels,
    SidebarSectionTypes,
    IOS_HORIZONTAL_LANDSCAPE: 44,
};
