'use client';

import { Button } from '../../ui/Button/Button';

export const HeroButtons = () => (
  <div className="flex flex-col sm:flex-row gap-4 pt-4">
    <Button variant="primary">
      Começar Agora
    </Button>
    <Button variant="outline">
      Ver Documentação
    </Button>
  </div>
);