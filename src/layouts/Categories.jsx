import React, { useEffect, useState } from 'react'
import { Menu } from 'semantic-ui-react'
import CategoryService from '../services/categoryService'

export default function Categories() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        let categoryService = new CategoryService()
        categoryService.getCategories().then(result => setCategories(result.data))
    }, [])

    return (
        <div>
            <Menu vertical>
                {
                    categories.map(categori => (

                        <Menu.Item
                            name={categori.categoryName}
                        />

                    ))
                }
            </Menu>
        </div>
    )
}
