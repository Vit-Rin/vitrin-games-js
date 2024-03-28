import React from "react";
import WarningIcon from "./WarningIcon";

export default function FailedScreen() {
    return (
        <div className="tw-flex tw-justify-center tw-items-center tw-fixed tw-h-screen tw-w-full tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-bg-black tw-bg-opacity-80 tw-z-50 tw-text-white tw-text-lg">
            <div className="tw-container tw-flex tw-justify-center tw-items-center">
                <WarningIcon />
                <span className="tw-ml-2 tw-font-[capsule]">
                    Something went wrong.
                </span>
            </div>
        </div>
    );
}
