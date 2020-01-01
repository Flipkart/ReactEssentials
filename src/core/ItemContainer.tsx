import * as React from "react";
import { ComponentCompat } from "../utils/ComponentCompat";

export interface ItemContainerProps {
    horizontal: boolean;
    layoutOffset: number;
    layoutInterval: number;
}

export default abstract class ItemContainer<P, S> extends React.Component<P, S> {}
