// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import {createSelector} from 'reselect';
import {getCurrentChannelId, getUsers} from '@redux/selectors/entities/common';
import {getTeammateNameDisplaySetting} from '@redux/selectors/entities/preferences';
import {displayUsername} from '@redux/utils/user_utils';
import {Typing} from 'types/typing';
import {UserProfile} from '@redux/types/users';
import {GlobalState} from '@redux/types/store';
import {IDMappedObjects} from '@redux/types/utilities';

const getUsersTypingImpl = (profiles: IDMappedObjects<UserProfile>, teammateNameDisplay: string, channelId: string, parentPostId: string, typing: Typing): Array<string> => {
    const id = channelId + parentPostId;

    if (typing[id]) {
        const users = Object.keys(typing[id]);

        if (users.length) {
            return users.map((userId) => {
                return displayUsername(profiles[userId], teammateNameDisplay);
            });
        }
    }

    return [];
};

export const makeGetUsersTypingByChannelAndPost = () => {
    return (createSelector(getUsers, getTeammateNameDisplaySetting, (state: GlobalState, options: {
        channelId: string;
        postId: string;
    }): string => options.channelId, (state: GlobalState, options: {
        channelId: string;
        postId: string;
    }): string => options.postId, (state: GlobalState): Typing => state.entities.typing, getUsersTypingImpl) as (state: GlobalState, a: {
        channelId: string;
        postId: string;
    }) => Array<string>);
};

export const getUsersTyping: (state: GlobalState) => Array<string> = createSelector(
    getUsers,
    getTeammateNameDisplaySetting,
    getCurrentChannelId,
    (state) => state.entities.posts.selectedPostId,
    (state) => state.entities.typing,
    getUsersTypingImpl,
);
