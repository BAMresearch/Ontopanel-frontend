import layout from "./index.html";
import OntoUploader from "./scripts/uploader.js";
import { storeData } from "./scripts/store";
import SignForm from "./scripts/login-system";
import OntoTree from "./scripts/onto-tree";
import "./index.scss";

export const makeEntityWnd = (ui) => {
  var app = document.createElement("div");
  app.id = "entityfinderold-app";
  app.style = "height: 450px; width: 380px; font-size: 15px; padding: 5px; ";

  app.innerHTML = layout;
  app.addEventListener("contextmenu", (evt) => evt.preventDefault());

  mxUtils.br(app);
  mxResources.parse("entityfinderOld=entityFinder(old)");

  var wnd = new mxWindow(
    mxResources.get("entityfinderOld"),
    app,
    document.body.offsetWidth - 480,
    140,
    390,
    480,
    true,
    true
  );
  wnd.destroyOnClose = false;
  wnd.setMaximizable(false);
  wnd.setResizable(false);
  wnd.setClosable(true);
  wnd.setVisible(false);

  let addBtn = app.querySelector('button[name="onto-add-btn"]');
  let uploader = new OntoUploader(app);
  addBtn.onclick = (evt) => {
    evt.preventDefault();
    uploader.addTrigger();
  };

  let signLogin = new SignForm(app);

  let signBtn = app.querySelector("#entityfinderold-signup-btn");
  signBtn.onclick = (evt) => {
    evt.preventDefault();
    signLogin.signUp();
  };

  let loginBtn = app.querySelector("#entityfinderold-login-btn");
  loginBtn.onclick = (evt) => {
    evt.preventDefault();
    signLogin.login();
  };

  let logoutBtn = app.querySelector("#entityfinderold-logout-btn");
  logoutBtn.onclick = (evt) => {
    evt.preventDefault();
    signLogin.logout();
  };

  let ontoTreeContent = app.querySelector('div[name="onto-tree-content"]');

  const categoriesBtn = {
    "entityfinderold-tree-class-btn": "Class",
    "entityfinderold-tree-op-btn": "ObjectProperty",
    "entityfinderold-tree-dp-btn": "DatatypeProperty",
    "entityfinderold-tree-ind-btn": "Individual",
    "entityfinderold-tree-ap-btn": "AnnotationProperty",
    "entityfinderold-tree-dt-btn": "Datatype",
  };
  Object.keys(categoriesBtn).forEach((btnName) => {
    let btn = app.querySelector("#" + btnName);
    btn.onclick = (evt) => {
      let inputData =
        storeData.currentCategoriesContent.categories[
          categoriesBtn[evt.target.id]
        ];
      let innerTree = ontoTreeContent.firstElementChild;
      if (inputData.content) {
        let newTree = new OntoTree(app, ui, wnd, inputData);
        innerTree.replaceWith(newTree.treeContent);
      } else {
        innerTree.innerHTML = "";
      }
    };
  });

  app.querySelector("#entityfinderold-onto-extra-btn-MSEO").onclick = (evt) => {
    evt.preventDefault();
    fetch("plugins/ontopanelPlugin/ontoData/mseo_ontopanel.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.onto_table.namespaces = storeData.mesoNamespace;
        storeData.modifyOntoBank(
          ["entityfinderold-onto-extra-btn-MSEO", data],
          "add"
        );
        storeData.loadCurrentTable(data);
      });
  };

  app.querySelector('button[name="namespace-btn"]').onclick = (evt) => {
    evt.preventDefault();

    if (storeData.currentCategoriesContent.title) {
      let currentOnto =
        storeData.ontoBank[
          "entityfinderold-onto-extra-btn-" +
            storeData.currentCategoriesContent.title
        ];

      let currentNamespace = currentOnto.onto_table.namespaces.join("<br/>");

      let outputNamespace = currentNamespace + "<br/>";

      let nameSpaceCell = new mxCell(
        outputNamespace,
        new mxGeometry(0, 0, 90, 26),
        "shape=note;whiteSpace=wrap;html=1;backgroundOutline=1;darkOpacity=0.05;"
      );

      let size = ui.editor.graph.getPreferredSizeForCell(nameSpaceCell);
      nameSpaceCell.geometry.width = size.width + 30;
      nameSpaceCell.vertex = true;
      let labelOffset = size.width + 30;
      let graph = ui.editor.graph;

      let windowPosition = mxUtils.convertPoint(
        graph.container,
        wnd.getX(),
        wnd.getY()
      );

      let mousePosition = mxUtils.convertPoint(
        graph.container,
        mxEvent.getClientX(evt),
        mxEvent.getClientY(evt)
      );

      let tr = ui.editor.graph.view.translate;
      let scale = ui.editor.graph.view.scale;
      let x = windowPosition.x / scale - tr.x - labelOffset;
      let y = mousePosition.y / scale - tr.y;

      const cellGround = [nameSpaceCell];
      ui.editor.graph.importCells(cellGround, x, y);
    }
  };

  return wnd;
};
