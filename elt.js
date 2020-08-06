export function elt(name, attributes) {
    let node = document.createElement(name);
    //생성하고자 하는 tag의 이름으로 요소를 생성

    if (attributes) {
        //요소의 속성 설정이 있을 경우의 속성 설정과 속성값의 설정
        for (let attr in attributes) {
            if (attributes.hasOwnProperty(attr)) {
                node.setAttribute(attr, attributes[attr]);
            }
        }
    }

    //세번째 인수 가 있을경우 해당 요소의 html text로 자식요소로 삽입
    for (let i = 2; i < arguments.length; i++) {
        let child = arguments[i];
        if (typeof child == "string") {
            child = document.createTextNode(child);
        }
        node.appendChild(child);
    }

    return node;
}