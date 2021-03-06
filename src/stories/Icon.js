import React from 'react'
import { storiesOf } from '@storybook/react'
import { Icon } from '..'

// This is to work around: https://github.com/kadirahq/react-storybook-addon-info/issues/26#issuecomment-229029177
Icon.displayName = 'Icon'

storiesOf('Icon', module)
  .addWithInfo('Basic Usage', '', () => (
    <div className="uk-margin-bottom">
      <Icon icon="check" />
      &nbsp;
      <Icon icon="check" ratio={2} />
      &nbsp;
      <span className="uk-text-danger"><Icon icon="heart" /></span>
    </div>
  ), { header: false, inline: true, propTables: [Icon] })
