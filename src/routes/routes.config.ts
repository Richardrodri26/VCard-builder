
/*------------------------------  Config ------------------------------------------*/
export interface INavMenuOptions {
  label: string;
  path: string;
  permission?: string[];
  children?: INavMenuOptions[]
}

export const routerPaths: Record<string, INavMenuOptions> = {
    login: { path: "/", label: "Inicio de sesión" },
    viewVCard: { path: "/vcard", label: "Ver VCard" },
    register: { path: "/registrarse", label: "Registro de usuario" },
    vcardsHome: { path: "/vcards", label: "Mis VCards", children: [
        { path: "/new", label: "Nuevo VCard" },
    ] },
    
} as const


/*------------------------------  Functions ------------------------------------------*/
/**
 * Function that recursively return INavMenuOptions[]
 * options for aside navBar
 * @param children 
 * @returns 
 */
export const getMenuOptions = (children = routerPaths) => {
    const adminRouteEntries = Object.entries(children)

    const menuOptions: INavMenuOptions[] = adminRouteEntries.map((routeEntry) => {
        const [Key, Value] = routeEntry as any
        let children;

        if(Value.children) {
            children = getMenuOptions(Value.children)
        }

        return ({
            key: Key,
            label: Value.label,
            path: Value.path,
            permission: Value.permission,
            children: children
        })

    })
    
    return menuOptions
}