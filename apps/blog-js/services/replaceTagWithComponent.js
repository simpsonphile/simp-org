import Image from "next/image";
import jsdom from 'jsdom';

const replace = (children, component, tag, ReactDOMServer) => {
  return children?.map((el) => {
    if (el?.children?.length) {
      return {
        ...el,
        children: replace(el.children, component, tag),
      }
    }
  
    if (el.type === 'element' && el.tagName === tag) {
      const markup = ReactDOMServer.renderToStaticMarkup(component(el));
      const attributes = new jsdom.JSDOM(`<!DOCTYPE html>${markup}`).window.document.querySelector(tag).attributes;
      const props = {}
      for(const attr of attributes) {
        props[attr.name] = attr.value;
      }

      return {
        ...el,
        properties: {
          ...el.properties,
          ...props,
        },
      }
    }
  
    return el;
  })
}


// todo move component and tag prop as func arg 
const replaceTagWithComponent = (ReactDOMServer) => () => (tree, ...args) => {
  console.log(args);
    if (!Array.isArray(tree.children)) return tree;
    return { 
      ...tree, 
      children: replace(
        tree.children,
        (el) => (<Image src={el.properties.src} width={720} height={300} />),
        'img',
        ReactDOMServer,
        )
    }
}

export default replaceTagWithComponent;