import React from 'react';
import { greetUser } from '../utils';
export const Home = () => <div className="greeting">{greetUser()}</div>;
