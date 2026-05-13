enum Role {
     Admin = "Admin",
     Editor = "Editor",
     Guest = "Guest",
}

const PermissionMap: Record<Role, boolean> = {
     Admin : true,
     Editor: true,
     Guest: false,
};

console.log(PermissionMap.Admin);
console.log(PermissionMap.Guest);