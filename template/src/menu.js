export const Menu = [
    {
      name:"Dashboard",
      fixMenu:true,
      path:"/Dashboard",
      childrens:[]
    },
   
    {
      name:"Students",
      icon:"menu-icon fa fa-cogs",
      path:"/Students",
      //fixMenu:false,
      childrens:[
       {
          name:"List",
          path:"/Students/List",
          icon:"fa fa-puzzle-piece",
        },
    {
      name:"Create",
      path:"/Students/Create",
      icon:"fa fa-id-badge"
    },
    ]
   
  
}
]