import "primevue/resources/themes/lara-light-green/theme.css";
import "./assets/main.css";

import { createApp } from "vue";
import { defaultConfig, plugin } from "@formkit/vue";
import config from "../formkit.config";
import App from "./App.vue";
import { router } from "./router";

import PrimeVue from "primevue/config";
import Button from "primevue/button";
import AutoComplete from "primevue/autocomplete";
import "primeicons/primeicons.css";
import "primevue/resources/primevue.min.css";
import StyleClass from "primevue/styleclass";
import Accordion from "primevue/accordion";
import Avatar from "primevue/avatar";
import Badge from "primevue/badge";
import InlineMessage from "primevue/inlinemessage";
import InputNumber from "primevue/inputnumber";
import InputSwitch from "primevue/inputswitch";
import InputText from "primevue/inputtext";
import Menubar from "primevue/menubar";
import Checkbox from "primevue/checkbox";
import Chip from "primevue/chip";
import Chips from "primevue/chips";
import Dialog from "primevue/dialog";
import Dropdown from "primevue/dropdown";
import Fieldset from "primevue/fieldset";
import Menu from "primevue/menu";
import Message from "primevue/message";
import OverlayPanel from "primevue/overlaypanel";
import Panel from "primevue/panel";
import ProgressBar from "primevue/progressbar";
import RadioButton from "primevue/radiobutton";
import SelectButton from "primevue/selectbutton";
import Sidebar from "primevue/sidebar";
import Slider from "primevue/slider";
import SplitButton from "primevue/splitbutton";
import Steps from "primevue/steps";
import TabView from "primevue/tabview";
import Tag from "primevue/tag";
import TieredMenu from "primevue/tieredmenu";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import Calendar from "primevue/calendar";
import Card from "primevue/card";
import { PrimePreset } from "./primePreset";

const app = createApp(App);

app.use(plugin, defaultConfig(config));
app.use(PrimeVue, { unstyled: true, pt: PrimePreset });
app.use(ToastService);
app.use(router);

app.directive("styleclass", StyleClass);

app.component("Accordion", Accordion);
app.component("AutoComplete", AutoComplete);
app.component("Avatar", Avatar);
app.component("Badge", Badge);
app.component("Button", Button);
app.component("Calendar", Calendar);
app.component("Card", Card);
app.component("Checkbox", Checkbox);
app.component("Chip", Chip);
app.component("Chips", Chips);
app.component("Dialog", Dialog);
app.component("Dropdown", Dropdown);
app.component("Fieldset", Fieldset);
app.component("InlineMessage", InlineMessage);
app.component("InputNumber", InputNumber);
app.component("InputSwitch", InputSwitch);
app.component("InputText", InputText);
app.component("Menu", Menu);
app.component("Menubar", Menubar);
app.component("Message", Message);
app.component("OverlayPanel", OverlayPanel);
app.component("Panel", Panel);
app.component("ProgressBar", ProgressBar);
app.component("RadioButton", RadioButton);
app.component("SelectButton", SelectButton);
app.component("Sidebar", Sidebar);
app.component("Slider", Slider);
app.component("SplitButton", SplitButton);
app.component("Steps", Steps);
app.component("TabView", TabView);
app.component("Tag", Tag);
app.component("TieredMenu", TieredMenu);
app.component("Toast", Toast);

app.mount("#app");
