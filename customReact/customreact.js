function customRender (mainContainer , reactElement){
  const element=document.createElement(reactElement.type);
  element.innerHTML=reactElement.children;
  element.setAttribute('href' , reactElement.props.href )
  element.setAttribute('target' , reactElement.props.target)
  mainContainer.appendChild(element)
}



const reactElement = {
    type: "a",
    props: {
        href: 'https://google.com',
        target:"_blank"
    },
    children:"Click here"
}

const mainContainer=document.querySelector("#root")

customRender(mainContainer , reactElement)