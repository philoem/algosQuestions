import React from 'react'
import GoBack from './index'
import { withRouter } from 'storybook-addon-react-router-v6'

export default {
	component: GoBack,
	title: 'Components/GoBack',
	decorators: [withRouter],
	parameters: {
		reactRouter: {
			routePath: '/'
		}
	}
}

const Template = (args) => <GoBack {...args} />

export const Default = Template.bind({})
