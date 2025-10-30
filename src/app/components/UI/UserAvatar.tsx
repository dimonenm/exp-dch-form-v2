"use client"
import { Avatar } from "@heroui/react";

export default function UserAvatar() {


    const user = {
        name: 'Дмитрий',
        surname: 'Голынков'
    };

    const initials = `${user.name.charAt(0)} ${user.surname.charAt(0)}`;


    return (
        <div className="flex gap-4 items-center">
            <Avatar showFallback name={initials} color='primary' />
        </div>
    );
}
