import React from "react";
import "./App.css";
import marked from "marked";
// import { placeholder } from "@babel/types";
// const marked = require('marked');

marked.setOptions({
  renderer: new marked.Renderer(),
  sanitize: false,
  gfm: true,
  breaks: true,
  tables: true,
  xhtml: true,
});

class MarkdownApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      markdown: e.target.value,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Editor markdown={this.state.markdown} onChange={this.handleChange} />
        <Preview markdown={this.state.markdown}/>
      </React.Fragment>
    );
  }
}

const Editor = props => {
  return (
    <div className="input-wrapper-class">
      <textarea
        id="editor"
        className="input-box-class"
        value={props.markdown}
        onChange={props.onChange}
      />
    </div>
  );
};

const Preview = props => {
    return (
      <div id="preview-wrapper" className="preview-wrapper-class">
        <div id="preview" className="preview-class" dangerouslySetInnerHTML={{__html: marked(props.markdown)}} type="Preview"></div>
      </div>
    );
}

const placeholder = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There are also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header  | Crazy Header  | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
- Some are bulleted.
- With different indentation levels.
- That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)`

export default MarkdownApp;
