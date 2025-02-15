import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import SectionWrapper from '../ui/section-wrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactForm) => {
    console.log(data);
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  };

  return (
    <SectionWrapper id="contact" className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Space_Grotesk']">
            Get In Touch
          </h2>
          <p className="text-[#FFFFFF80] text-lg font-['SF_Pro_Display']">
            Have a project in mind? Let's work together!
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="space-y-2">
            <Input
              placeholder="Your Name"
              {...form.register('name')}
              className="bg-[#2A2A2A]/20 backdrop-blur-md border-white/10"
            />
            {form.formState.errors.name && (
              <p className="text-red-500 text-sm">{form.formState.errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Your Email"
              {...form.register('email')}
              className="bg-[#2A2A2A]/20 backdrop-blur-md border-white/10"
            />
            {form.formState.errors.email && (
              <p className="text-red-500 text-sm">{form.formState.errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Textarea
              placeholder="Your Message"
              {...form.register('message')}
              className="bg-[#2A2A2A]/20 backdrop-blur-md border-white/10 min-h-[150px]"
            />
            {form.formState.errors.message && (
              <p className="text-red-500 text-sm">{form.formState.errors.message.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-primary/20 backdrop-blur-md hover:bg-primary/30"
          >
            Send Message
          </Button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
