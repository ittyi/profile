import React from 'react';
import AppServer from './AppServer';
import { hydrateRoot } from "react-dom/client";

const container: HTMLElement = document.getElementById("root")!;
hydrateRoot(container, <AppServer />);