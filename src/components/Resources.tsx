import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const resources = [
    {
      title: "Learn the Basics",
      description: "Start with HTML, CSS, and JavaScript fundamentals",
      icon: "📚",
      action: "Begin Tutorial"
    },
    {
      title: "Practice Coding",
      description: "Solve challenges and build projects to improve your skills",
      icon: "💻",
      action: "Start Practicing"
    },
    {
      title: "Join Community",
      description: "Connect with other developers and get help when needed",
      icon: "👥",
      action: "Join Now"
    },
    {
      title: "Build Projects",
      description: "Apply your knowledge by creating real-world applications",
      icon: "🚀",
      action: "View Projects"
    }
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Learning Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to become a skilled developer, from beginner to advanced
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="text-center hover:shadow-soft transition-smooth group">
              <CardHeader className="pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-smooth">
                  {resource.icon}
                </div>
                <CardTitle className="text-xl">{resource.title}</CardTitle>
                <CardDescription className="text-base">
                  {resource.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="glow" className="w-full">
                  {resource.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;