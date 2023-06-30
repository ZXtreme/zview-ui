import { default as Button } from "./button";
import { default as Icon } from "./icon";
import { default as Color } from "./color";
import { default as Link } from "./link";
import { Container, Header, Aside, Main, Footer } from "./container";
import { default as Scrollbar } from "./scrollbar";
import { default as Backtop } from "./backtop";
import { Breadcrumb, BreadcrumbItem } from "./breadcrumb";
import { default as Divider } from "./divider";
import { default as Alert } from "./alert";
import { default as Tooltip } from "./tooltip";
import { default as Popover } from "./popover";
import { default as Dialog } from "./dialog";
import { default as Input } from "./input";
import { default as InputNumber } from "./input-number";
import { default as Radio } from "./radio";
import { Checkbox, CheckboxGroup } from "./checkbox-group";
import { default as Switch } from "./switch";
import { default as Slider } from "./slider";
import { default as TimePicker } from "./time-picker";
import { default as Drawboard } from "./drawboard";
import { default as TimeAxis } from "./time-axis";
import { default as Avatar } from "./avatar";
import { default as Card } from "./card";
import { default as Carousel } from "./carousel";
import { default as Empty } from "./empty";
import { default as Message } from "./message";
import { default as Progress } from "./progress";
import { default as Result } from "./result";
import { default as Tag } from "./tag";
import { Timeline, TimelineItem } from "./timeline";
import { default as Badge } from "./badge";
import { default as Image } from "./image";
export { Button, Icon, Color, Link, Container, Header, Aside, Main, Footer, Scrollbar, Backtop, Breadcrumb, BreadcrumbItem, Divider, Alert, Tooltip, Popover, Dialog, Input, InputNumber, Radio, Checkbox, CheckboxGroup, Switch, Slider, TimePicker, Drawboard, TimeAxis, Avatar, Card, Carousel, Empty, Message, Progress, Result, Tag, Timeline, TimelineItem, Badge, Image };
declare const _default: (({
    name: string;
} & ((app: import("vue").App<any>, ...options: any[]) => any) & {
    install?: ((app: import("vue").App<any>, ...options: any[]) => any) | undefined;
}) | ({
    name: string;
} & {
    install: (app: import("vue").App<any>, ...options: any[]) => any;
}) | typeof Message)[];
export default _default;
