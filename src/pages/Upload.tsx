import React from 'react';
import { Upload as UploadIcon, File, X } from 'lucide-react';

export default function Upload() {
  const [dragActive, setDragActive] = React.useState(false);
  const [files, setFiles] = React.useState<File[]>([]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(prev => [...prev, ...droppedFiles]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...selectedFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Upload Your Work</h1>
        <p className="text-gray-600">Share your research papers, projects, and documents with the community</p>
      </div>

      <div className="space-y-6">
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center ${
            dragActive ? 'border-indigo-600 bg-indigo-50' : 'border-gray-300'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <UploadIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-gray-600 mb-4">
            Drag and drop your files here, or{' '}
            <label className="text-indigo-600 hover:text-indigo-500 cursor-pointer">
              browse
              <input
                type="file"
                multiple
                onChange={handleChange}
                className="hidden"
              />
            </label>
          </p>
          <p className="text-sm text-gray-500">
            Supported formats: PDF, DOC, DOCX (max. 50MB)
          </p>
        </div>

        {files.length > 0 && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Selected Files</h3>
            <div className="space-y-3">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <File className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-700">{file.name}</span>
                    <span className="text-sm text-gray-500">
                      ({Math.round(file.size / 1024)} KB)
                    </span>
                  </div>
                  <button
                    onClick={() => removeFile(index)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            className="btn btn-primary px-8"
            disabled={files.length === 0}
          >
            Upload Files
          </button>
        </div>
      </div>
    </div>
  );
}