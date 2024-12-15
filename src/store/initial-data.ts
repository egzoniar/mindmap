import { Edge } from "reactflow";
import { D_Node } from "src/types/mindmap.types";

// export const initialNodes: D_Node[] = [
//   {
//     id: "1",
//     type: "rootNode",
//     selected: true,
//     data: {
//       content: "Hello World",
//       selectedLayout: "Base",
//     },
//     position: { x: 50, y: 25 },
//   },
// ];
export const initialNodes: D_Node[] = [
  {
    id: "1",
    type: "rootNode",
    selected: true,
    data: {
      content: "<p>Code Patterns</p>",
      selectedLayout: "Base",
    },
    position: {
      x: 50,
      y: 25,
    },
    positionAbsolute: {
      x: 50,
      y: 25,
    },
    width: 375,
    height: 80,
    dragging: false,
  },
  {
    id: "2",
    type: "defaultNode",
    data: {
      content:
        "<h2>Creational Patterns</h2><hr><p>Creational patterns deal with object creation<br>mechanisms, providing a way to create objects that<br>are flexible, reusable, and less dependent on specific<br>implementations. These patterns aim to abstract the<br>instantiation process, making the system independent<br>of the concrete classes used.</p><p><strong>Here are some Creational Patterns listed below:</strong></p><ol><li><p>Singleton</p></li><li><p>Factory Method</p></li><li><p>Builder</p></li></ol>",
      selectedLayout: "Default",
    },
    position: {
      x: 733.456990484925,
      y: -335.16681946291635,
    },
    width: 308,
    height: 131,
    selected: false,
    positionAbsolute: {
      x: 733.456990484925,
      y: -335.16681946291635,
    },
    dragging: false,
  },
  {
    id: "3",
    type: "defaultNode",
    data: {
      content:
        "<h2>Structural Patterns</h2><hr><p>Structural patterns deal with the composition of<br>objects and classes, ensuring that they work together<br>efficiently. These patterns focus on simplifying<br>relationships between entities and promoting flexibility<br>in the structure.</p><p><strong>Here are some Structural Patterns listed below:</strong></p><ol><li><p>Adapter</p></li><li><p>Composite</p></li></ol>",
      selectedLayout: "Default",
    },
    position: {
      x: -598.5299831404371,
      y: -581.3503543676529,
    },
    width: 428,
    height: 251,
    selected: false,
    positionAbsolute: {
      x: -598.5299831404371,
      y: -581.3503543676529,
    },
    dragging: false,
  },
  {
    id: "4",
    type: "defaultNode",
    data: {
      content:
        "<h3>Singleton</h3><p>Ensures that a class has only one instance and<br>provides a global point of access to it.</p><pre><code>class Singleton {\n  constructor() {\n    if (!this.instance) {\n      this.instance = new Singleton();\n    }\n    return this.instance;\n  }\n}\nconst instance1 = new Singleton();\nconst instance2 = new Singleton();\nconsole.log(instance1 === instance2); // true\n</code></pre>",
      selectedLayout: "Default",
    },
    position: {
      x: 783.2761446364275,
      y: -1202.3742537437474,
    },
    width: 513,
    height: 372,
    selected: false,
    positionAbsolute: {
      x: 783.2761446364275,
      y: -1202.3742537437474,
    },
    dragging: false,
  },
  {
    id: "5",
    type: "defaultNode",
    data: {
      content:
        "<h3>Factory Method</h3><p>Defines an interface for creating objects but lets<br>subclasses decide the type of object to create.</p><pre><code>class ShapeFactory {\n    static createShape(type) {\n        if (type === 'circle') return new Circle();\n        if (type === 'square') return new Square();\n    }\n}\nconst shape = ShapeFactory.createShape('circle');\n</code></pre>",
      selectedLayout: "Default",
    },
    position: {
      x: 1542.5131640793438,
      y: -1004.094615294442,
    },
    width: 459,
    height: 324,
    selected: false,
    positionAbsolute: {
      x: 1542.5131640793438,
      y: -1004.094615294442,
    },
    dragging: false,
  },
  {
    id: "6",
    type: "defaultNode",
    data: {
      content:
        "<h3>Builder</h3><p>Separates the construction of a complex object from its representation.</p><pre><code>class Burger {\n    constructor() {\n        this.ingredients = [];\n    }\n    addIngredient(ingredient) {\n        this.ingredients.push(ingredient);\n        return this;\n    }\n}\nconst burger = new Burger().addIngredient('patty').addIngredient('lettuce');\n</code></pre>",
      selectedLayout: "Default",
    },
    position: {
      x: 1472.1659567437619,
      y: -488.41429607751985,
    },
    width: 652,
    height: 372,
    selected: false,
    positionAbsolute: {
      x: 1472.1659567437619,
      y: -488.41429607751985,
    },
    dragging: false,
  },
  {
    id: "7",
    type: "defaultNode",
    data: {
      content:
        "<h3>Adapter</h3><p>Converts an interface into another interface that a client expects.</p><pre><code>class OldAPI {\n    oldMethod() { return 'old method'; }\n}\nclass Adapter {\n    constructor() { this.oldApi = new OldAPI(); }\n    newMethod() { return this.oldApi.oldMethod(); }\n}\nconst adapted = new Adapter();\nconsole.log(adapted.newMethod()); // 'old method'</code></pre>",
      selectedLayout: "Default",
    },
    position: {
      x: -1227.2376441459276,
      y: -1094.9016765289991,
    },
    width: 504,
    height: 348,
    selected: false,
    positionAbsolute: {
      x: -1227.2376441459276,
      y: -1094.9016765289991,
    },
    dragging: false,
  },
  {
    id: "8",
    type: "defaultNode",
    data: {
      content:
        "<h3>Decorator</h3><p>Adds behavior to objects dynamically.</p><pre><code>class Coffee {\n    cost() { return 5; }\n}\nclass MilkDecorator {\n    constructor(coffee) { this.coffee = coffee; }\n    cost() { return this.coffee.cost() + 1; }\n}\nconst coffeeWithMilk = new MilkDecorator(new Coffee());\nconsole.log(coffeeWithMilk.cost()); // 6</code></pre>",
      selectedLayout: "Default",
    },
    position: {
      x: -570.1470386669384,
      y: -1415.2196787599632,
    },
    width: 613,
    height: 468,
    selected: false,
    positionAbsolute: {
      x: -570.1470386669384,
      y: -1415.2196787599632,
    },
    dragging: false,
  },
];

export const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "floating",
    style: {
      strokeWidth: 3,
      stroke: "#bbb",
    },
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
    type: "floating",
    style: {
      strokeWidth: 3,
      stroke: "#bbb",
    },
  },
  {
    id: "e2-4",
    source: "2",
    target: "4",
    type: "floating",
    style: {
      strokeWidth: 3,
      stroke: "#bbb",
    },
  },
  {
    id: "e2-5",
    source: "2",
    target: "5",
    type: "floating",
    style: {
      strokeWidth: 3,
      stroke: "#bbb",
    },
  },
  {
    id: "e2-6",
    source: "2",
    target: "6",
    type: "floating",
    style: {
      strokeWidth: 3,
      stroke: "#bbb",
    },
  },
  {
    id: "e3-7",
    source: "3",
    target: "7",
    type: "floating",
    style: {
      strokeWidth: 3,
      stroke: "#bbb",
    },
  },
  {
    id: "e3-8",
    source: "3",
    target: "8",
    type: "floating",
    style: {
      strokeWidth: 3,
      stroke: "#bbb",
    },
  },
];
