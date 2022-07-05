import { html } from 'lit';
import '../src/readme-creator.js';

export default {
  title: 'ReadmeCreator',
  component: 'readme-creator',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <readme-creator
      style="--readme-creator-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </readme-creator>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
