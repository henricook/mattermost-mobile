// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import {getTheme} from '@redux/selectors/entities/preferences';
import {isLandscape} from 'app/selectors/device';

import NotificationSettingsMentions from './notification_settings_mentions';

function mapStateToProps(state) {
    return {
        theme: getTheme(state),
        isLandscape: isLandscape(state),
    };
}

export default connect(mapStateToProps)(NotificationSettingsMentions);
