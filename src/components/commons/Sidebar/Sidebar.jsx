import React from 'react'
import robot from '../../../assets/svg/robot.svg'

import {
    Link
} from "react-router-dom";

export const Sidebar = () => {
    return (
        <div className="container border-r-2 border-gray-600 h-full">
            <div className="pt-4">
                <Link to="/" className="text-gray-900">
                    <img className="m-2.5 h-12 w-50 " src={robot} alt="Workflow" />
                </Link>
            </div>
            <div className="mt-4">
                <ul>
                    <li className="hover:bg-gray-300 px-4">
                        <div className="h-8 w-full">
                            <Link to="/projects" className="text-gray-900"> Projects </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
