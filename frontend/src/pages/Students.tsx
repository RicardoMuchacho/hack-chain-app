import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { User, BookOpen, Award, Calendar } from 'lucide-react';

// Dummy data for student profile
const studentData = {
  name: "María González",
  email: "maria.gonzalez@email.com",
  profileImage: "",
  bio: "Estudiante de ciberseguridad apasionada por el ethical hacking y la protección de sistemas",
  certificates: [
    {
      id: 1,
      name: "Ethical Hacking Fundamentals",
      issuer: "CyberSec Academy",
      date: "2024-01-15",
      tokenId: "TOKEN001"
    },
    {
      id: 2,
      name: "Web Application Security",
      issuer: "Security Institute",
      date: "2024-02-20",
      tokenId: "TOKEN002"
    },
    {
      id: 3,
      name: "Network Penetration Testing",
      issuer: "HackLab",
      date: "2024-03-10",
      tokenId: "TOKEN003"
    }
  ]
};

const Students = () => {
  return (
    <Layout>
      <Navbar />
      
      <main className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Student profile</h1>
            <p className="text-gray-400">
              Perfil del estudiante, el cual tendrá también la opción de actualizar su información 
              personal. NO SE PUEDE ACTUALIZAR EL TIPO DE USUARIO (ESTUDIANTE/EDUCADOR/RECLUTADOR)
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Personal Information */}
            <div className="lg:col-span-1">
              <Card className="glass border-white/10 p-6">
                <div className="text-center mb-6">
                  <div className="relative inline-block mb-4">
                    <Avatar className="w-32 h-32 mx-auto">
                      <AvatarImage src={studentData.profileImage} />
                      <AvatarFallback className="bg-blue-500/20 text-blue-400 text-2xl">
                        <User className="w-16 h-16" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Button size="sm" variant="outline" className="glass border-white/20">
                        Foto
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-white text-center mb-6">
                    Información personal
                  </h2>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-gray-400">Nombre completo</label>
                      <p className="text-white font-medium">{studentData.name}</p>
                    </div>
                    
                    <div>
                      <label className="text-sm text-gray-400">Email</label>
                      <p className="text-white font-medium">{studentData.email}</p>
                    </div>
                    
                    <div>
                      <label className="text-sm text-gray-400">Tipo de usuario</label>
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                        Estudiante
                      </Badge>
                    </div>
                    
                    <div>
                      <label className="text-sm text-gray-400">Biografía</label>
                      <p className="text-white text-sm">{studentData.bio}</p>
                    </div>
                  </div>

                  <Button className="w-full mt-6 glass border-white/20" variant="outline">
                    <User className="w-4 h-4 mr-2" />
                    Actualizar información
                  </Button>
                </div>
              </Card>
            </div>

            {/* Right Column - Tokenized Certificates View */}
            <div className="lg:col-span-2">
              <Card className="glass border-white/10 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-white flex items-center">
                    <Award className="w-6 h-6 mr-2 text-yellow-500" />
                    Vista de certificados tokenizados
                  </h2>
                  <Badge variant="outline" className="glass border-white/20">
                    {studentData.certificates.length} certificados
                  </Badge>
                </div>

                {studentData.certificates.length === 0 ? (
                  <div className="text-center py-12">
                    <BookOpen className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-400 text-lg">No tienes certificados tokenizados aún</p>
                    <p className="text-gray-500 text-sm mt-2">
                      Completa cursos y obtén certificaciones para verlas aquí
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {studentData.certificates.map((cert) => (
                      <Card key={cert.id} className="glass border-white/10 p-4 hover:border-white/20 transition-colors">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="font-semibold text-white mb-1">{cert.name}</h3>
                            <p className="text-sm text-gray-400">{cert.issuer}</p>
                          </div>
                          <Badge variant="outline" className="glass border-green-500/30 text-green-400">
                            Verificado
                          </Badge>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-400">
                            <Calendar className="w-4 h-4 mr-2" />
                            {new Date(cert.date).toLocaleDateString('es-ES', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </div>
                          <div className="text-sm">
                            <span className="text-gray-400">Token ID: </span>
                            <span className="text-blue-400 font-mono">{cert.tokenId}</span>
                          </div>
                        </div>

                        <Button size="sm" className="w-full mt-3 glass border-white/20" variant="outline">
                          Ver certificado completo
                        </Button>
                      </Card>
                    ))}
                  </div>
                )}

                <div className="mt-8 p-4 glass border-white/10 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">¿Necesitas verificar un certificado?</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Utiliza el Token ID para verificar la autenticidad de cualquier certificado en la blockchain
                  </p>
                  <Button className="glass border-white/20" variant="outline">
                    Verificar certificado
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Students;