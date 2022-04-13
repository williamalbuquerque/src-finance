export class CategoryDto {
    _id?: string;
    user_id: string;
    name: string;
    type: Type;
    icon?: string;
    color?: string;
    sub_category?: [string];    
}

enum Type {
    expense = "expense",
    earning = "earning"
}