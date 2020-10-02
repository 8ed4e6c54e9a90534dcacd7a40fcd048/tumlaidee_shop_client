import jwt_decode from "jwt-decode"

export default class PermissionController {
  getPermissionMenu(menu) {
    const DEFINE_PERMISSION = {
      permission_view: false,
      permission_add: false,
      permission_edit: false,
      permission_approve: false,
      permission_cancel: false,
      permission_delete: false,
    }

    try {
      const { permission } = jwt_decode(localStorage.getItem('permission-token'))

      if (permission === null || permission === undefined) {
        return DEFINE_PERMISSION
      } else {
        const access = permission.find(item => item.menu_name_en === menu)

        if (access === undefined) {
          return DEFINE_PERMISSION
        } else {
          return access
        }
      }
    } catch (error) {
      console.log('error', error)
      return DEFINE_PERMISSION
    }
  }
}