/*
 *   Copyright (c) 2024 Matthew Allen Rackley
 *   All rights reserved.

 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:

 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.

 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 */

import React, { useState } from 'react';

interface ComponentDropDownProps {
  onAddComponent: (type: string) => void;
}

const ComponentDropdown: React.FC<ComponentDropDownProps> = (props) => {
  const { onAddComponent } = props;
  const [selectedComponent, setSelectedComponent] = useState('');

  const handleAdd = () => {
    if (selectedComponent) {
      onAddComponent(selectedComponent);
      setSelectedComponent(''); // Reset the selection
    }
  };

  return (
    <div>
      <select value={selectedComponent} onChange={(e) => setSelectedComponent(e.target.value)}>
        <option value="" disabled>Select Component</option>
        <option value="Text">Text Component</option>
        <option value="Image">Image Component</option>
        <option value="Video">Video Component</option>
      </select>
      <button onClick={handleAdd}>Add Component</button>
    </div>
  );
};

export default ComponentDropdown;
