import {useI18n} from 'locale';
import {Box, ButtonSingleLine, Text, TextMultiline} from 'components';
import React, {useCallback} from 'react';
import {useAccessibilityAutoFocus} from 'shared/useAccessibilityAutoFocus';
import {Linking} from 'react-native';

import {BaseHomeView} from '../components/BaseHomeView';

export const FrameworkUnavailableView = ({isBottomSheetExpanded}: {isBottomSheetExpanded: boolean}) => {
  const i18n = useI18n();

  const onHelp = useCallback(() => {
    Linking.openURL(i18n.translate('Info.HelpUrl')).catch(err => console.error('An error occurred', err));
  }, [i18n]);

  const autoFocusRef = useAccessibilityAutoFocus(!isBottomSheetExpanded);
  return (
    <BaseHomeView iconName="icon-bluetooth-disabled">
      <Text focusRef={autoFocusRef} variant="bodyTitle" marginBottom="m" accessibilityRole="header">
        {i18n.translate('Home.FrameworkUnavailable.Title')}
      </Text>
      <TextMultiline marginBottom="m" text={i18n.translate('Home.FrameworkUnavailable.Body')} />
      <Box alignSelf="stretch" marginBottom="l" marginTop="l">
        <ButtonSingleLine
          text={i18n.translate('Home.FrameworkUnavailable.CTA')}
          variant="danger50Flat"
          externalLink
          onPress={onHelp}
        />
      </Box>
    </BaseHomeView>
  );
};
