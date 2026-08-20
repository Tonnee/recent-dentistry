import React, { ElementType, ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

export type ContainerSize = "sm" | "md" | "lg" | "xl" | "full" | "default";

export interface ContainerProps<T extends ElementType = "div"> {
    as?: T;
    children: React.ReactNode;
    className?: string;
    size?: ContainerSize;
    withPadding?: boolean;
}

const SIZE_MAP: Record<ContainerSize, string> = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    default: "max-w-screen-2xl",
    full: "max-w-full",
};

export function Container<T extends ElementType = "div">({
    as,
    children,
    className,
    size = "default",
    withPadding = true,
    ...props
}: ContainerProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ContainerProps<T>>) {
    const Component = as || "div";

    return (
        <Component
            className={clsx(
                "w-full mx-auto",
                SIZE_MAP[size],
                withPadding && "px-4 sm:px-6 lg:px-12",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}

export default Container;
