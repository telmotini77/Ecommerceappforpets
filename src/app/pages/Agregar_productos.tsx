import { useState } from 'react';
import { products } from '../data/products';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { useNavigate } from 'react-router';

export function Agregar_productos() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    category: '',
    image: ''
  });
  const [imagePreview, setImagePreview] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Crear URL temporal para previsualización
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      setFormData(prev => ({ ...prev, image: previewUrl }));
    }
  };

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setFormData(prev => ({ ...prev, image: url }));
    setImagePreview(url);
  };

  const handleCategoryChange = (value: string) => {
    setFormData(prev => ({ ...prev, category: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validar campos requeridos
    if (!formData.name || !formData.description || !formData.price || !formData.stock || !formData.category || !formData.image) {
      alert('Por favor complete todos los campos');
      setIsSubmitting(false);
      return;
    }

    // Crear nuevo producto
    const newProduct = {
      id: String(Date.now()),
      name: formData.name,
      price: parseFloat(formData.price),
      image: formData.image,
      category: formData.category as 'comida' | 'cuidado' | 'accesorios' | 'suplementos',
      description: formData.description,
      stock: parseInt(formData.stock),
      sold: 0
    };

    // Agregar al inventario (en memoria)
    products.push(newProduct);

    // Simular delay de red
    setTimeout(() => {
      alert(`Producto "${newProduct.name}" agregado al inventario con ${newProduct.stock} unidades`);
      setIsSubmitting(false);
      
      // Limpiar formulario
      setFormData({
        name: '',
        description: '',
        price: '',
        stock: '',
        category: '',
        image: ''
      });
      setImagePreview('');
      
      // Redireccionar al dashboard de admin
      navigate('/admin');
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Agregar Producto al Inventario</CardTitle>
          <CardDescription>
            Complete el formulario para agregar un nuevo producto al inventario
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Imagen del producto */}
            <div className="space-y-2">
              <Label htmlFor="image">Foto del Producto *</Label>
              <div className="space-y-2">
                <Input
                  id="imageUrl"
                  name="imageUrl"
                  placeholder="Ingrese URL de la imagen..."
                  value={formData.image}
                  onChange={handleImageUrlChange}
                />
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">o</span>
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="cursor-pointer"
                  />
                </div>
                {imagePreview && (
                  <div className="mt-2">
                    <img 
                      src={imagePreview} 
                      alt="Preview" 
                      className="w-32 h-32 object-cover rounded-md border"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://placehold.co/128x128?text=Imagen+no+disponible';
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Nombre del producto */}
            <div className="space-y-2">
              <Label htmlFor="name">Nombre del Producto *</Label>
              <Input
                id="name"
                name="name"
                placeholder="Ej: Alimento Premium para Perros 10kg"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Descripción */}
            <div className="space-y-2">
              <Label htmlFor="description">Descripción *</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Describe las características del producto..."
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                required
              />
            </div>

            {/* Precio y Stock en fila */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Precio */}
              <div className="space-y-2">
                <Label htmlFor="price">Precio ($) *</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="0.00"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Cantidad/Stock */}
              <div className="space-y-2">
                <Label htmlFor="stock">Cantidad en Inventario *</Label>
                <Input
                  id="stock"
                  name="stock"
                  type="number"
                  min="0"
                  placeholder="0"
                  value={formData.stock}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* Categoría */}
            <div className="space-y-2">
              <Label htmlFor="category">Categoría *</Label>
              <Select value={formData.category} onValueChange={handleCategoryChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione una categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="comida">Comida</SelectItem>
                  <SelectItem value="cuidado">Cuidado</SelectItem>
                  <SelectItem value="accesorios">Accesorios</SelectItem>
                  <SelectItem value="suplementos">Suplementos</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Botones */}
            <div className="flex gap-4 pt-4">
              <Button 
                type="submit" 
                className="flex-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Agregando...' : 'Agregar al Inventario'}
              </Button>
              <Button 
                type="button" 
                variant="outline"
                onClick={() => navigate('/admin')}
              >
                Cancelar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}